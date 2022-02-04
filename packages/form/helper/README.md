```js
import { ActionFormData } from "mojang-minecraft-ui"
import FormHelper from "./form-helper.js"

let form = new FormHelper( new ActionFormData() )

// form.add(<form-field-name>, form-field-arguments): { on(): Form  }
form.add("button", "Play", "textures/item/apple").onInteract( eventData => {
    // do stuff on button click
})

// form.show(<player>, [on-cancel] )
form.show(<player>, eventData => {
    // do stuff on form canceled
} )

```
