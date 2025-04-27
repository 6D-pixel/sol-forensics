"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useState } from "react"
import SignRugcheck from "@/components/SignRugcheck"

function page() {
  const [tokenAddr, setTokenAddr] = useState<string>("")
  const [signed,setSigned] = useState<boolean>(false)

  async function handleToken() {
    const response = await axios.get(`/tokens/${tokenAddr}/insiders/graph`)
    console.log(response.data)
  }

  return (
    <div>
      <Input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTokenAddr(e.target.value)
        }
        value={tokenAddr}
        placeholder="Token Address"
      />
      { signed && <Button type="submit" onClick={handleToken}>
        Submit
      </Button>}
      <SignRugcheck setSignedAction={setSigned}/>
        
    </div>
  )
}
export default page
