import { Heading } from '@/components/ds/heading'
import { Text } from '@/components/ds/text'

export default function ErrorPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-6">
      <div className="flex flex-col items-center text-center space-y-4">
        
        <div className="w-12 h-12 bg-black rounded-md" />

        <Heading size="md" weight="bold" as="h1">
          Erro
        </Heading>

        <Text size="p1" tone="muted">
          Não encontramos uma conta conectada ao{' '}
          <span className="text-orange-500 font-medium">Google</span>.
          <br />
          Tente entrar com outra conta.
        </Text>
      </div>
    </div>
  )
}