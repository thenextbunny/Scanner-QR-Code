import type { NextConfig } from "next";
import fs from 'fs';
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, {isServer}){
    if(!isServer){
      config.devServer = {
        https:{
          key: fs.readFileSync(path.resolve('localhost-key.pem')),
          cert: fs.readFileSync(path.resolve('localhost.pem')),
        },
      };
    }

    return config;
  },
};

export default nextConfig;
