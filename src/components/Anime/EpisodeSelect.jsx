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

function EpisodeSelect({ onClick }) {
  return (
    <Select onValueChange={onClick} >
      <SelectTrigger className="w-[180px] bg-neutral-700/70">
        <SelectValue placeholder="Jepang" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel >Bahasa</SelectLabel>
          <SelectItem value="Japanese">Jepang</SelectItem>
          <SelectItem value="English">Ingris</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default EpisodeSelect;
