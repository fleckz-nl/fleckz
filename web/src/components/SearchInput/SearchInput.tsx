import * as React from 'react'

import { Search } from 'lucide-react'
import { Form } from 'web/src/components/ui/form'
import { Input } from 'web/src/components/ui/input'

const SearchInput = () => {
  return (
    <Form>
      <div className="relative flex items-center text-primary-foreground">
        <Search className="absolute mx-2 size-4" />
        <Input type="text" placeholder="Zoek maar door" />
      </div>
    </Form>
  )
}

export default SearchInput
