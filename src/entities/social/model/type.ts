export type SocialApp = {
  appId: number | null
  appName: string
}

export type SocialAppInfo = {
  restKey: string
  redirectUrl: string | null
} & SocialApp
