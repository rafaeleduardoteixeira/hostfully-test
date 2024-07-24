import { Container, SearchInputField } from './SearchInput.styles';

interface SearchInputProps {
  value?: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Container>
      <SearchInputField value={value} onChange={handleChange} placeholder="Enter a property name or city" />
    </Container>
  );
};
