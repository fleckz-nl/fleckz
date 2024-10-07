import * as React from 'react'

import { Search } from 'lucide-react'
import { Form } from 'web/src/components/ui/form'
import { Input } from 'web/src/components/ui/input'

const SearchInput = () => {
  return (
    <Form>
      <div className="relative flex items-center text-white/70">
        <Search className="absolute mx-2 size-4" />
        <Input
          type="text"
          placeholder="Zoek maar door"
          className="border-primary-foreground/20 bg-gray-800/50 pl-8 placeholder:text-white/70 focus:bg-black focus:text-white"
        />
      </div>
    </Form>
  )
}

export default SearchInput
