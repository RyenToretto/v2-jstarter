import { mockDataDictionaryList } from '@/config'

const list = {
  code: '0000',
  message: '0000',
  success: true,
  result: {
    total: mockDataDictionaryList && mockDataDictionaryList.length,
    lists: mockDataDictionaryList
  }
}

export default list
