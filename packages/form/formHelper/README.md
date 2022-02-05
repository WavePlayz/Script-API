```js
import { ActionFormData } from "mojang-minecraft-ui"
import FormHelper from "./form-helper.js"

let form = new FormHelper( new ActionFormData() )

// form.addField(<form-field-name>, form-field-arguments): FormHelperField
form
  .add("button", "Play", "textures/item/apple")
  .onInteract( (fieldValue, fieldData) => {
    // do stuff on button click
  })

form.onCancel = function(response) {}
form.onError = function(error) {}
form.onFinish = function(response) {}

// form.show(<player>)
form.show(<player>)
```
