import { Button } from "./ui/button"

export default function LoginButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <Button variant="outline">
        Login
      </Button>      
    </form>
  )
}
