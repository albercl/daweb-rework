import {Input} from '@nextui-org/react';
import {Button} from '@nextui-org/button';
import {Search} from 'react-feather';

export default function SearchBar() {
  return (
    <form id="search-form" className="flex flex-col sm:flex-row gap-2 py-5">
      <Input
        type="text"
        variant="flat"
        label="Buscar"
        placeholder="Introduce un término de búsqueda"
        id="search-term"
        name="search-term"
        isClearable
      />
      <Button
        className="min-h-unit-10 flex-row flex-nowrap w-full sm:w-auto sm:h-auto"
        variant="flat"
        color="primary"
        size="lg"
        startContent={
          <Search size={36}/>
        }
      >
        Buscar
      </Button>
    </form>
  );
}