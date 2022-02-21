import { createContext } from 'react'

import { DialogContextProps } from './DialogTypes'

const DialogContext = createContext<DialogContextProps>({
  show: false,
  setShow: undefined,
  setProps: undefined,
  alertRef: { current: null }
})

export default DialogContext