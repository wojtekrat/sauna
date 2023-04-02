import { tv } from 'tailwind-variants'
const ContactInput = tv({
  base: 'p-2 m-2',
  variants: {
    color: {
      primary: 'bg-stone-500 text-white',
      secondary: 'bg-purple-500 text-white'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg'
    }
  },
  compoundVariants: [
    {
      size: ['sm', 'md']
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
})

export default ContactInput
