'use client';

import { useActionState, useEffect, useId } from 'react';
import { useFormStatus } from 'react-dom';
import { toast } from 'sonner';
import { Button, Input, Label, Textarea } from '@agency/ui';
import {
  submitProposalAction,
  type ContactFormState,
} from '@/lib/actions/contact';

const INITIAL: ContactFormState = { status: 'idle' };

interface ContactFormProps {
  serviceOptions: { value: string; label: string }[];
  defaultService?: string;
  source?: 'contact' | 'proposal' | 'service' | 'footer';
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={pending}>
      {pending ? 'Sending…' : 'Send request'}
    </Button>
  );
}

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <p id={id} className="text-xs text-destructive">
      {errors[0]}
    </p>
  );
}

export function ContactForm({ serviceOptions, defaultService, source = 'contact' }: ContactFormProps) {
  const [state, formAction] = useActionState(submitProposalAction, INITIAL);
  const uid = useId();
  const fe = state.fieldErrors ?? {};

  useEffect(() => {
    if (state.status === 'success') toast.success(state.message ?? 'Message sent');
    if (state.status === 'error' && !state.fieldErrors) toast.error(state.message ?? 'Something went wrong');
  }, [state]);

  if (state.status === 'success') {
    return (
      <div className="rounded-xl border border-success/40 bg-success/10 p-6 text-sm">
        <p className="font-medium text-success">Thanks — your request is in.</p>
        <p className="mt-1 text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      <input type="hidden" name="source" value={source} />
      <div className="hidden" aria-hidden>
        <label htmlFor={`${uid}-website`}>Leave this empty</label>
        <input id={`${uid}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${uid}-name`}>Name</Label>
          <Input id={`${uid}-name`} name="name" autoComplete="name" aria-invalid={!!fe.name} required />
          <FieldError id={`${uid}-name-err`} errors={fe.name} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${uid}-email`}>Email</Label>
          <Input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!fe.email}
            required
          />
          <FieldError id={`${uid}-email-err`} errors={fe.email} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${uid}-phone`}>Phone</Label>
          <Input id={`${uid}-phone`} name="phone" autoComplete="tel" aria-invalid={!!fe.phone} />
          <FieldError id={`${uid}-phone-err`} errors={fe.phone} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${uid}-company`}>Company</Label>
          <Input id={`${uid}-company`} name="company" autoComplete="organization" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${uid}-service`}>Service</Label>
          <select
            id={`${uid}-service`}
            name="service"
            defaultValue={defaultService ?? ''}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Choose a service</option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${uid}-budget`}>Monthly budget</Label>
          <select
            id={`${uid}-budget`}
            name="budget"
            defaultValue=""
            className="h-10 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Not sure yet</option>
            <option>Under $1,000</option>
            <option>$1,000 – $3,000</option>
            <option>$3,000 – $10,000</option>
            <option>$10,000+</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={`${uid}-message`}>How can we help?</Label>
        <Textarea id={`${uid}-message`} name="message" rows={5} aria-invalid={!!fe.message} required />
        <FieldError id={`${uid}-message-err`} errors={fe.message} />
      </div>

      <SubmitButton />
    </form>
  );
}
