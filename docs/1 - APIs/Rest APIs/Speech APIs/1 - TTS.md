# Text-to-Speech API
## TTS `POST`

```bash
https://api.botlhale.xyz/tts
```
:::tip
> You need to include an `Authentication Token` in request headers. See the [Authentication](../../1%20-%20Authentication.md#generate-a-bearer-token-post) page of this documentation for information on how to generate authentication token codes.
:::

This endpoint handles single text to speech conversion.

Request Params |Data Type | |Description |
| ------------- | ------------- | ------------- | ------------- |
| TextMsg  | `string` |**Required** | This is the text message from the user to the bot.| 
| LanguageCode  | `string` | **Required** | This is the language in which the user interacts with the bot. <br/>See the [Supported Languages](../2%20-%20Languages.md) page for a list of supported languages and codes. |


<br />

#### Request Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python" default>

```python 
import requests

url = "https://api.botlhale.xyz/tts"

payload={
  'LanguageCode': 'xh-ZA',
  'TextMsg': 'Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.'
  }
files=[

]
headers = {
  'Authorization': 'Bearer <IdToken>'
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
```

</TabItem>
<TabItem value="bash" label="Bash">


```bash 
curl --location --request POST 'https://api.botlhale.xyz/tts' \
--header 'Authorization: Bearer <IdToken>' \
--form 'LanguageCode="xh-ZA"' \
--form 'TextMsg="Xa ufuna ukuthenga imoto cofa iqhosha lokuqala."'
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript 
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <IdToken>");

var formdata = new FormData();
formdata.append("LanguageCode", "xh-ZA");
formdata.append("TextMsg", "Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.botlhale.xyz/tts", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

</TabItem>
<TabItem value="nodejs" label="NodeJs - Request">

```js
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.botlhale.xyz/tts',
  'headers': {
    'Authorization': 'Bearer <IdToken>'
  },
  formData: {
    'LanguageCode': 'xh-ZA',
    'TextMsg': 'Xa ufuna ukuthenga imoto cofa iqhosha lokuqala.'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

</TabItem>
</Tabs>

#### Response body
```json
{
    "DateReceived": "01/05/2021 15:38:35",
    "LanguageCode": "xh-ZA",
    "SpeechResponseURL": "<URL>",
    "TextMsg": "Xa ufuna ukuthenga imoto cofa iqhosha lokuqala."
}
```

:::info
> We are here to help! Please email support@botlhale.ai with any questions.
:::
