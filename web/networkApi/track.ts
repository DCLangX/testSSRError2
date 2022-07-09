import request from '@/utils/request'

export async function orignTrackEnter () {
  return await request({
    url: '/enter'
  })
}
