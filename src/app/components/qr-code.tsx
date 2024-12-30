"use client";

import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

const QRCodeReader: React.FC = () => {
  const [lang, setLang] = useState<string>("pt");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [cameraAvailable, setCameraAvailable] = useState<boolean | null>(null);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);
  const [qrResult, setQrResult] = useState<string | null>(null);
  const codeReader = useRef(new BrowserMultiFormatReader());
  const scanningRef = useRef<boolean>(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const userLang = navigator.language || "pt";
    setLang(userLang.startsWith("en") ? "en" : "pt");
  }, []);

  useEffect(() => {
    const checkCameraAvailability = async () => {
      try {
        if (videoRef.current && videoRef.current.srcObject) {
          const oldStream = videoRef.current.srcObject as MediaStream;
          oldStream.getTracks().forEach((track) => track.stop());
          videoRef.current.srcObject = null;
        }

        const devices = await navigator.mediaDevices.enumerateDevices();
        const hasCamera = devices.some(
          (device) => device.kind === "videoinput"
        );

        if (!hasCamera) {
          setCameraAvailable(false);
          setErrorDetails("Nenhuma câmera detectada.");
          return;
        }

        const newStream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 3840 },
            height: { ideal: 2160 },
            frameRate: { ideal: 30 },
            facingMode: { ideal: "environment" },
          },
        });

        setStream(newStream);
        if (videoRef.current) {
          videoRef.current.srcObject = newStream;
          videoRef.current.play();
        }

        setCameraAvailable(true);
        setErrorDetails(null);
      } catch (err: any) {
        console.error("Erro ao acessar a câmera:", err);
        setErrorDetails("Erro desconhecido ao tentar acessar a câmera.");
        setCameraAvailable(false);
      }
    };

    checkCameraAvailability();
  }, []);

  useEffect(() => {
    const scanQRCode = async () => {
      if (videoRef.current && cameraAvailable && !scanningRef.current) {
        scanningRef.current = true;
        try {
          await codeReader.current.decodeFromVideoDevice(
            null,
            videoRef.current,
            (result, error) => {
              if (result) {
                const qrData = result.getText();
                console.log("QR Code detectado:", qrData);
                setQrResult(qrData);
                const userConfirmed = window.confirm(
                  `QR Code detectado: ${qrData}. Deseja abrir este link?`
                );
                if (userConfirmed) {
                  window.location.href = qrData;
                }
              } else if (error) {
                setTimeout(() => (scanningRef.current = false), 500);
              }
            }
          );
        } catch (err) {
          console.error("Erro de leitura:", err);
          scanningRef.current = false;
        }
      }
    };

    if (cameraAvailable) {
      scanQRCode();
    }
  }, [cameraAvailable]);

  if (cameraAvailable === false) {
    return (
      <div>
        <p>Erro: Câmera não disponível ou permissão negada.</p>
        {errorDetails && <p>Detalhes: {errorDetails}</p>}
      </div>
    );
  }

  return (
    <div
      lang={lang}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      {cameraAvailable === null ? (
        <div>Verificando disponibilidade da câmera...</div>
      ) : (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></video>
        </div>
      )}
    </div>
  );
};

export default QRCodeReader;