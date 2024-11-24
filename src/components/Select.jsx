import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Selector({ onClick }) {
  return (
    <Select onValueChange={onClick} >
      <SelectTrigger className="w-[180px] max-md:w-[150px] bg-neutral-700/20 text-primary">
        <SelectValue placeholder="Japanese" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup >
          <SelectLabel>Bahasa</SelectLabel>
          <SelectItem value="Japanese">Jepang</SelectItem>
          <SelectItem value="English">Ingris</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default Selector;
