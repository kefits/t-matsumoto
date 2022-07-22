import getConfig from "next/config";

export function url(filename: string): string {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { urlPrefix: string };
  };
  if (publicRuntimeConfig.urlPrefix == undefined) {
    return filename;  
  } else {
    return publicRuntimeConfig.urlPrefix + filename;
  }
}