import * as React from 'react'

import { Form } from 'web/src/components/ui/form'
import { Input } from 'web/src/components/ui/input'

const SearchInput = () => {
  return (
    <Form>
      <Input type="text" placeholder="Zoek maar door" />
    </Form>
  )
}

export default SearchInput
