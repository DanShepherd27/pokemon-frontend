import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { FormItem, Form, FormControl } from "../ui/form";

export default function SearchBar() {
  const form = useForm({
    mode: "onChange",
    values: {
      search: "",
    },
  });

  const { handleSubmit, register } = form;

  const onSubmit = (data: { search: string }) => {
    console.log("Search submitted:", data.search);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormItem>
            <Input {...register("search")} placeholder="Search..." />
          </FormItem>
        </FormControl>
      </form>
    </Form>
  );
}
