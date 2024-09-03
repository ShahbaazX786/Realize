import { Entypo } from "@expo/vector-icons";
import { View } from "react-native";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "./ui/select";

const CustomDropdown = ({
  data,
  placeholder,
}: {
  data: any;
  placeholder: string;
}) => {
  return (
    <View>
      <Select>
        <SelectTrigger variant="rounded" size="md">
          <SelectInput placeholder={placeholder} />
          <SelectIcon
            className="mr-3"
            as={Entypo}
            name="chevron-down"
            size={"sm"}
            color="black"
          />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {data.map((item: any) => (
              <SelectItem label={item.name} value={item.value} key={item.id} />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
};

export default CustomDropdown;
