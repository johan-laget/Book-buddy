import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
   
const SelectScrollable = () => {
    return (
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Romance</SelectLabel>
            <SelectItem value="romance">Romance</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Action</SelectLabel>
            <SelectItem value="action">Action</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Thriller</SelectLabel>
            <SelectItem value="thriller">Thriller</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Mystery</SelectLabel>
            <SelectItem value="mystery">Mystery</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Science Fiction</SelectLabel>
            <SelectItem value="science_fiction">Science Fiction</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Fantasy</SelectLabel>
            <SelectItem value="fantasy">Fantasy</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Horror</SelectLabel>
            <SelectItem value="horror">Horror</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Historical Fiction</SelectLabel>
            <SelectItem value="historical_fiction">Historical Fiction</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Young Adult</SelectLabel>
            <SelectItem value="young_adult">Young Adult</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Classics</SelectLabel>
            <SelectItem value="classics">Classics</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
  );
};

export default SelectScrollable;
