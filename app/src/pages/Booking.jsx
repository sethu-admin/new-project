import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function Booking() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = () => {
    alert('Your Journey is Booked!')
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen flex flex-col items-center py-8 space-y-4">
      <h2 className="text-xl">Passenger Information</h2>
      <input {...register('name', { required: true })} placeholder="Name" className="p-2 rounded bg-black/40" />
      {errors.name && <span className="text-red-400 text-sm">Required</span>}
      <input {...register('phone', { required: true })} placeholder="Phone" className="p-2 rounded bg-black/40" />
      {errors.phone && <span className="text-red-400 text-sm">Required</span>}
      <input {...register('email')} placeholder="Email" className="p-2 rounded bg-black/40" />
      <button className="px-4 py-2 bg-purple-600 rounded" type="submit">Confirm</button>
    </form>
  )
}
