import { Heading } from '@/components/ds/heading'
import { Text } from '@/components/ds/text'
import { Logo } from '@/components/ds/logo'

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-[393px] h-[852px] bg-white rounded-2xl shadow-md flex flex-col items-center justify-center px-6 text-center">
        
        <Logo size="sm" className="mb-7" />

        <Heading size="sm" weight="bold" as="h1" className="text-black mb-2">
          Erro
        </Heading>

        <Text
          size="p1"
          tone="black"
          weight="regular"
          className="max-w-[260px] leading-none"
        >
          Não encontramos uma conta
          <br />
          conectada ao{' '}
          <Text as="span" tone="brand" weight="bold">
            Google
          </Text>.
          <br />
          Tente entrar com outra conta.
        </Text>

      </div>
    </div>
  )
}