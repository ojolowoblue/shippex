import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import Input from '@/components/ui/Input';
import Users from '@/assets/icons/users.svg?react';
import Lock from '@/assets/icons/lock.svg?react';
import Checkbox from '@/components/ui/Checkbox';
import Button from '@/components/ui/Button';
import { useLogin } from '@/hooks';
import parseError from '@/utils';
import { AxiosError } from 'axios';

const schema = Yup.object({
  usr: Yup.string().required('Please enter username').label('Username'),
  pwd: Yup.string().required('Please enter password').label('Password'),
  remember: Yup.boolean().required(),
});

export default function Login() {
  const navigate = useNavigate();
  const { login, isPending } = useLogin();

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<Yup.InferType<typeof schema>>({
    values: { usr: '', pwd: '', remember: false },
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ remember, ...rest }: Yup.InferType<typeof schema>) => {
    login(rest, {
      onError(err) {
        setError('remember', {
          message: parseError(err as AxiosError),
        });
      },
      onSuccess() {
        navigate('/');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[342px]">
        <div className="flex flex-col gap-4 mb-5">
          <div>
            <h1 className="text-2xl font-bold mb-2 text-center">Sign in</h1>
            <p className="text-center text-sub text-sm">
              Don’t have an account yet? <a className="text-primary font-semibold">Sign up here</a>
            </p>
          </div>

          <Input
            fullWidth
            autoComplete="off"
            label="Username"
            placeholder="ali@brandim"
            startAdornment={<Users width={16} height={16} />}
            {...register('usr')}
            error={!!errors.usr?.message}
            errorMessage={errors.usr?.message}
          />

          <Input
            fullWidth
            autoComplete="off"
            label="Password"
            type="password"
            secondaryLabel={
              <a href="#" className="text-primary text-sm font-semibold">
                Forgot Password?
              </a>
            }
            placeholder="your password"
            startAdornment={<Lock width={16} height={17} />}
            error={!!errors.pwd?.message}
            errorMessage={errors.pwd?.message}
            {...register('pwd')}
          />

          <Checkbox label="Remember me" {...register('remember')} errorMessage={errors.remember?.message} />
        </div>

        <Button loading={isPending} fullWidth>
          Sign In
        </Button>
      </div>
    </form>
  );
}
