import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { RiSearch2Line } from "react-icons/ri";

interface SearchFormData {
  searchQuery: string;
}

interface DesktopSearchProps {
  className?: string;
}

const DesktopSearch = ({ className }: DesktopSearchProps): JSX.Element => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<SearchFormData>({
    defaultValues: {
      searchQuery: '',
    }
  });

  const onSubmit = handleSubmit((data) => {
    if (data.searchQuery.trim()) {
      router.push(`/search?search=${encodeURIComponent(data.searchQuery.trim())}`);
    }
  });

  return (
    <form 
      onSubmit={onSubmit} 
      className={`md:flex hidden items-center gap-2 p-2 rounded-lg
        bg-white dark:bg-dprimary
        border dark:border-dprimary
        transition-all duration-300 ease-in-out
        ${className}`}
    >
      <button
        type="submit"
        className="p-2 rounded-lg
          text-black dark:text-white
          hover:bg-gray-100 dark:hover:bg-dlight
          transition-all duration-300 ease-in-out"
        aria-label="Search"
      >
        <RiSearch2Line />
      </button>
      <input
        type="text"
        {...register("searchQuery", {
          required: "Please enter a search term",
          minLength: {
            value: 2,
            message: "Search term must be at least 2 characters"
          }
        })}
        className="rounded-lg
          bg-transparent border-none outline-hidden
          text-black dark:text-white
          placeholder:text-gray-500 dark:placeholder:text-gray-400
          focus:ring-2 focus:ring-primary
          transition-all duration-300 ease-in-out"
        placeholder="ابحث في عالم القومية"
        aria-invalid={errors.searchQuery ? "true" : "false"}
      />
      {errors.searchQuery && (
        <span className="sr-only" role="alert">
          {errors.searchQuery.message}
        </span>
      )}
    </form>
  );
};

export default DesktopSearch; 