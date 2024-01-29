/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios'
const send = async () => {
  const { data, status } = await axios.post(
    'http://localhost:3000/jb-test/my-action',
    {
      data: JSON.stringify({
        fields: { name: 'john doe' },
        settings: { api_key: '1234' },
      }),
    }
  )
  if (status === 200) {
    console.log(data)
  }
}

void send()
