import { useAuthenticator } from "@aws-amplify/ui-react";
import AiGeneration from './AiGeneration.tsx'
import AiConversation from './AiConversation.tsx'

export default function App() {

  const { signOut } = useAuthenticator();

  return (
    <main>
      <AiGeneration/>
      <AiConversation/>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}
