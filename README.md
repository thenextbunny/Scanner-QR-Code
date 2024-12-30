# Scanner QR Code

## Resumo do Projeto

Este é um projeto web para leitura de QR Codes utilizando a câmera do dispositivo. Ele foi desenvolvido com foco em acessibilidade e eficiência, garantindo uma experiência intuitiva para o usuário em diferentes dispositivos. O sistema detecta QR Codes em tempo real e emite um alerta com o texto guardado no QR Code.

## Pré-requisitos

### Para rodar o projeto localmente, você precisa:

```bash
Node.js (versão 16 ou superior) e npm .
Clonar o repositório com os arquivos do projeto.
Instalação
Permitir o uso da camera
```

### Clonar o repositório:

```bash
git clone https://github.com/DanTeodoro/Scanner-QR-Code.git
cd scanner
```

### Instalar as dependências:

```bash
npm install
```

### Iniciar o servidor de desenvolvimento:

```bash
npm run dev
Acesse o projeto no navegador em https://localhost:3000.
```

## Tecnologias Usadas e Motivo das Escolhas

<table>
  <tbody>
    <tr>
      <td>Next.js</td>
      <td><img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js Logo"></td>
      <td>Framework de facil compreensão e que facilita a integração com bibliotecas.</td>
    </tr>
    <tr>
      <td>TypeScript</td>
      <td><img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Logo"></td>
      <td>Tipagem estática que aumenta a segurança e reduz erros durante o desenvolvimento.</td>
    </tr>
    <tr>
      <td>@zxing/library</td>
      <td><img src="https://img.shields.io/badge/ZXing-lightgrey?style=for-the-badge" alt="ZXing Logo"></td>
      <td>Biblioteca que permite a leitura do QR Code.</td>
    </tr>
    <tr>
      <td>mkcert</td>
      <td><img src="https://img.shields.io/badge/mkcert-blue?style=for-the-badge" alt="mkcert Logo"></td>
      <td>Ferramenta que permite rodar o projeto com cerficado https.</td>
    </tr>
  </tbody>
</table>

## Como usar
<table>
  <tbody>
    <tr>
      <td>Abra o projeto no navegador.</td>
    </tr>
    <tr>
      <td>Permita o uso da câmera quando solicitado.</td>
    </tr>
    <tr>
      <td>Aponte a câmera para um QR Code.</td>
    </tr>
    <tr>
      <td>Caso um QR Code seja detectado, o sistema irá mostrar um alerta com o texto contido no QR Code ou um link para o local de destino.</td>
    </tr>
  </tbody>
</table>

## Fontes de ajuda

<table>
  <tbody>
    <tr>
      <td>ChatGPT</td>
      <td><img src="https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white" alt="ChatGpt Logo"></td>
      <td>Ferramenta mais utilizada para o desenvolvimento desse projeto.</td>
    </tr>
    <tr>
      <td>GitHub</td>
      <td><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Logo"></td>
      <td>Local que permitiu a tentativa de outras abordagens no decorrer do projeto, local que recomendou a utilização da biblioteca zxing.</td>
    </tr>
    <tr>
      <td>Reddit</td>
      <td><img src="https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white " alt="Reddit Logo"></td>
      <td>Forúm utilizado para sanar algumas duvidas que tive no decorrer do projeto.</td>
    </tr>
    <tr>
      <td>Udemy</td>
      <td><img src="https://img.shields.io/badge/Udemy-A435F0?style=for-the-badge&logo=Udemy&logoColor=white " alt="Udemy Logo"></td>
      <td>Site usado para assistir a um curso de next JS.</td>
    </tr>
  </tbody>
</table>

## Maiores dificuldades

<table>
    <tbody>
        <tr>
            <td>
                Compatibilidade com os navegadores dos celulares.
            </td>
        </tr>
        <tr>
            <td>
                Problemas com a resolução do video exibido pela camera.
            </td>
        </tr>
        <tr>
            <td>
                Problemas em encontrar uma biblioteca que fosse capaz de ler QR Codes mais robustos.
            </td>
        </tr>
        <tr>
            <td>
                Achar uma maneira de abrir o projeto em dispositivos mobile.
            </td>
        </tr>
    </tbody>
</table>

## Soluções

<table>
    <tbody>
        <tr>
            <td>
                Em relação a compatibilidade com navegadores dos celulares, é encontrado até o presente momento, dificuldade de foco em alguns navegadores de alguns dispositivos, porém funciona perfeitamente na maioria dos dispositivos, principalmente em dispositivos android.
            </td>
        </tr>
        <tr>
            <td>
                Para resolver o problema com a resolução exibida pela camera, foi necessario pedir que o projeto busque uma resolução 4K, pois assim, permite que o video exibido pela camera, tenha o maximo de qualidade que o hardware do dispositivo suporta.
            </td>
        </tr>
        <tr>
            <td>
                Antes de encontrar a biblioteca zxing, foi utilizada a biblioteca jsQR que não foi capaz de ler QR Codes mais complexos, então foi necessario a recorrer a ajuda do GitHub que recomendou a utilização da biblioteca Zxing.
            </td>
        </tr>
        <tr>
            <td>
                Através do chatGPT, foi possivel integrar ao projeto o certificado https pelo MKcert.
            </td>
        </tr>
    </tbody>
</table>

