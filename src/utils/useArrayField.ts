import { useFormContext } from '../FormContext';
import { FormData } from '../types';

export function useArrayField<
  K extends keyof FormData,
  TItem extends Extract<FormData[K], unknown[]>[number] & { id: string } = Extract<FormData[K], unknown[]>[number] & { id: string }
>(
  fieldName: K,
  newItemDefaults: Omit<TItem, 'id'>
) {
  const { formData, setFormData } = useFormContext();

  const items = (formData[fieldName] as unknown as TItem[] | undefined) || [];

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: [...items, { id: crypto.randomUUID(), ...newItemDefaults } as unknown as TItem] as unknown as FormData[K]
    }));
  };

  const updateItem = <F extends keyof TItem>(id: string, field: F, value: TItem[F]) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: items.map(item => (item.id === id ? { ...item, [field]: value } : item)) as unknown as FormData[K]
    }));
  };

  const removeItem = (id: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: items.filter(item => item.id !== id) as unknown as FormData[K]
    }));
  };

  return { items, addItem, updateItem, removeItem };
}
