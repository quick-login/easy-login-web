export type SocialApp = {
  appId: number
  appName: string
}

export type SocialAppInfo = {
  restKey: string
  redirectUrl: string
} & SocialApp
