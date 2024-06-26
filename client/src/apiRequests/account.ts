import http from '@/lib/http'
import {
  AccountResType,
  UpdateMeBodyType
} from '@/schemaValidations/account.schema'

const accountApiRequest = {
  getList: () =>
    http.get<AccountResType>('/account', {
      cache: 'no-store'
    }),
  me: (sessionToken: string) =>
    http.get<AccountResType>('account/me', {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    }),
  meClient: () => http.get<AccountResType>('account/me'),
  // Update profile
  updateMe: (body: UpdateMeBodyType) =>
    http.put<AccountResType>('account/me', body)
}

export default accountApiRequest