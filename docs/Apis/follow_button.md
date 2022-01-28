---
id: follow_button
---

# Follow Button

Embedding a follow button on your website is a quick and easy way to follow/unfollow other people on the given namespace. Let's start.

The CyberConnect follow button SDK for JavaScript doesn't have any standalone files that need to be downloaded or installed. Instead, you simply need to include a short piece of regular JavaScript in your HTML that will asynchronously load the SDK into your pages. The async load means that it does not block loading other elements of your page.

The source code can be found [here](https://github.com/cyberconnecthq/follow-button).

**Create a follow button**

First you need to include the [cyberconnect-follow-button.min.js](https://connect.cybertino.io/js/cyberconnect-follow-button.min.js) script and call follow.init after the script loaded.

```js
<script>
async function initCyberConnect() {
    await capi.follow.init({
        ethProvider: ethProvider, // ethProvider is an Ethereum provider
	namespace: 'CyberConnect',
	env: 'PRODUCTION' // env decides the endpoints. Now we have STAGING and PRODUCTION. The default value is PRODUCTION
    });
</script>
<script src="https://connect.cybertino.io/js/cyberconnect-follow-button.min.js" defer onload="initCyberConnect"></script>
```



Then, to create a follow button, add an `div` element to contain a button `id` and call `follow.render` with the button `id` and the target wallet address

```html
<body>
  <div id="follow-button"></div>
  <script>
    capi.follow.render("follow-button", {
      toAddr: 'xxx',
      onSuccess: (event) => {
        console.log(event);
      },
      onFailure: (event) => {
        console.log(event);
      },
    });
  </script>
</body>
```

When the button triggered, the callbacks will be called with the following event object:

```json
onSuccess:
{
    code: EVENT_NAME,
    toAddr: "xxx"
}

onFailure:
{
    code: ERROR_CODE,
    message: "error message"
}
```

**Button Style:**
* Follow
  * Normal

    ![](https://user-images.githubusercontent.com/17503721/143494393-d397246e-0901-4026-aa8a-666515ad6cc5.png)
  * Hover

    ![](https://user-images.githubusercontent.com/17503721/143494572-598b1e0a-9c76-4f61-83d0-f25e589ef66e.png)
* Following
  * Normal

    ![](https://user-images.githubusercontent.com/17503721/143494432-3206ef20-9e1f-49d9-a27c-104044d6cd52.png)
  * Hover

    ![](https://user-images.githubusercontent.com/17503721/143494445-8ac2abdc-9725-4921-a236-52655f52a54a.png)
