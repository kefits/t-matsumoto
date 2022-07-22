import getConfig from "next/config";

export function url(filename: string): string {
  const { publicRuntimeConfig } = getConfig();
  if (publicRuntimeConfig.urlPrefix == undefined) {
    return filename;
  } else {
    return publicRuntimeConfig.urlPrefix + filename;
  }
}
