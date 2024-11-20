import { FC, ReactNode } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface FormProps {
  onSubmit: SubmitHandler<any>;
  defaultValues?: Record<string, any>;
  children: ReactNode;
  className?: string;
}

export const Form: FC<FormProps> = ({
  onSubmit,
  defaultValues = {},
  children,
  className,
  ...props
}) => {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods} {...props}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
