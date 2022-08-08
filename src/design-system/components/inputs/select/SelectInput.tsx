import { ValidationState } from '@react-types/shared';
import { ComponentType, ReactNode, useMemo } from 'react';
import Select, {
  DropdownIndicatorProps,
  Props,
  StylesConfig,
  components,
  MenuProps,
  MultiValueRemoveProps,
  OnChangeValue,
  GroupBase,
  Options,
  PropsValue,
  SingleValue,
  MultiValue,
  ValueContainerProps,
  CommonPropsAndClassName,
} from 'react-select';
import { ClearIndicatorProps } from 'react-select/dist/declarations/src/components/indicators';
import tw, { theme } from 'twin.macro';
import { inputFocusStyles } from '../../../styles/focus/inputFocusStyles';
import { BaseStyleContainer } from '../../../styles/tailwind/baseStyles';
import { TdsIconCross } from '../../icons/components';
import { CommonInputProps } from '../types/commonInputProps';

export const SelectValueContainer = components.ValueContainer;

export type BaseOption<Value> = {
  readonly value: Value;
  readonly label: string;
};

export type GroupedOption<Value> = {
  readonly label: string;
  readonly options: readonly BaseOption<Value>[];
};

export type SelectCustomDisplay<Value, IsMulti extends boolean> = ComponentType<
  ValueContentProps<BaseOption<Value>, IsMulti, GroupedOption<Value>>
>;

export type ValueContentProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> = {
  isDisabled: boolean;
} & CommonPropsAndClassName<Option, IsMulti, Group>;

export type BaseSelectProps<Value, IsMulti extends boolean = false> = {
  /** The options in the select menu. */
  options: Options<BaseOption<Value> | GroupedOption<Value>>;
  /** Is the select searchable. */
  isSearchable?: boolean;
  /** Whether to hide selected options from the menu.  */
  hideSelectedOptions?: boolean;
  placeholder?: string | null;
  isMulti?: IsMulti;
  attachToBody?: boolean;
  isClearable?: boolean;
  maxMenuHeight?: number;
  /**
   * Define a custom component to replace the default value display.
   *
   * The placeholder will be disabled when this component is defined.
   */
  CustomDisplay?: SelectCustomDisplay<Value, IsMulti>;
  overrideValueUpdate?: (
    newValue: OnChangeValue<Value, IsMulti>
  ) => OnChangeValue<Value, IsMulti>;
} & Pick<
  Props<BaseOption<Value> | GroupedOption<Value>, IsMulti>,
  'placeholder' | 'isClearable' | 'isMulti' | 'maxMenuHeight'
>;

export type SelectProps<
  Value,
  IsMulti extends boolean = false,
  GroupedOption = GroupBase<Value>
> = {
  onChange?: (newValue: OnChangeValue<Value, IsMulti> | undefined) => void;
  value?: PropsValue<Value>;
  validationState?: ValidationState;
  'aria-label'?: string;
} & Pick<
  Props<BaseOption<Value> | GroupedOption, IsMulti>,
  'aria-label' | 'aria-labelledby'
> &
  BaseSelectProps<Value, IsMulti> &
  CommonInputProps;

const DropdownIndicator = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: DropdownIndicatorProps<Option, IsMulti, Group>
) => (
  <components.DropdownIndicator {...props}>
    <div {...props.innerProps}>
      <svg tw="w-3 h-3" viewBox="0 0 12 12" fill="none">
        <path
          d="M2 4L6 8L10 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </components.DropdownIndicator>
);

const DefaultValueContainer = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  ...props
}: ValueContainerProps<Option, IsMulti, Group>) => {
  return <components.ValueContainer {...props}></components.ValueContainer>;
};

const getCustomValueContainer =
  <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
    ValueContent: ComponentType<ValueContentProps<Option, IsMulti, Group>>
  ) =>
  ({ children, ...props }: ValueContainerProps<Option, IsMulti, Group>) => {
    return (
      <components.ValueContainer {...props} tw="grid!">
        <>
          {/* min-width: 0 is required to get text truncation to work. */}
          <div tw="min-w-0 grid-area[1/1/2/3]">
            <ValueContent {...props} />
          </div>
          {/* Don't render the placeholder */}
          {(children as Array<ReactNode>)[1]}
        </>
      </components.ValueContainer>
    );
  };

const ClearIndicator = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: ClearIndicatorProps<Option, IsMulti, Group>
) => (
  <components.ClearIndicator
    tw="transition-all! transition-duration[100ms] rounded p-1.5! mr-1 cursor-pointer hover:(bg-trailgrey-700 bg-opacity-10)"
    {...props}
  >
    <div {...props.innerProps}>
      <TdsIconCross tw="text-grey-500" size="sm" />
    </div>
  </components.ClearIndicator>
);

const Menu = <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
  props: MenuProps<Option, IsMulti, Group>
) => {
  return (
    <BaseStyleContainer>
      <components.Menu
        {...props}
        tw="(box-shadow[0px 4px 20px 0px rgba(94, 135, 172, 0.35)] rounded-lg p-0 mt-2 py-1)!"
      >
        {props.children}
      </components.Menu>
    </BaseStyleContainer>
  );
};

const MultiValueRemove = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: MultiValueRemoveProps<Option, IsMulti, Group>
) => {
  const isDisabled = props.selectProps.isDisabled;
  return (
    <components.MultiValueRemove {...props}>
      <div {...props.innerProps}>
        {!isDisabled && <TdsIconCross tw="text-trailgrey-500" size="sm" />}
      </div>
    </components.MultiValueRemove>
  );
};

const customStyles = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  isInvalid: boolean
): StylesConfig<Option, IsMulti, Group> => ({
  dropdownIndicator: (_, state) => {
    const baseStyles = tw`p-2.5 hover:text-trailgrey-600`;
    const focusStyles = state.isFocused
      ? tw`text-blue-500`
      : tw`text-trailgrey-500`;
    const disabledStyles = state.isDisabled ? tw`text-grey-300` : {};
    return { ...baseStyles, ...focusStyles, ...disabledStyles };
  },
  control: (provided, state) => {
    const invalidStyles = isInvalid
      ? tw`border-orange-500 hover:border-orange-500`
      : {};
    const activeStyles = state.isFocused ? inputFocusStyles(isInvalid) : {};
    const disabledStyles = state.isDisabled
      ? tw`bg-grey-100 border-trailgrey-300 text-trailgrey-300`
      : {};
    return {
      ...provided,
      minHeight: theme`spacing.9`,
      ...tw`
      border-trailgrey-400 shadow-none
      hover:(border-blue-500)
      `,
      ...invalidStyles,
      ...activeStyles,
      ...disabledStyles,
    };
  },
  singleValue: (provided) => ({
    ...provided,
    ...tw`text-body1 text-trailgrey-900`,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    ...tw`text-body1 text-trailgrey-500`,
    ...(state.isDisabled ? tw`text-grey-300` : {}),
  }),
  menu: (provided) => {
    return { ...provided, ...tw`w-max min-w-full` };
  },
  option: (provided, state) => {
    return {
      ...provided,
      ...tw`whitespace-nowrap`,
      ...tw`active:(bg-trailgrey-200)`,
      ...(state.isSelected ? tw`bg-blue-500 bg-opacity-90 font-medium` : {}),
      ...(state.isSelected ? tw`active:(bg-blue-600)` : {}),
      ...(state.isFocused ? tw`bg-trailgrey-200` : {}),
      ...(state.isFocused && state.isSelected ? tw`bg-blue-600` : {}),
    };
  },
  multiValueRemove: (provided, state) => ({
    ...provided,
    paddingLeft: 0,
    paddingRight: 0,
    ...(state.isDisabled ? {} : tw`px-0.5`),
    ...tw`hover:bg-grey-200`,
  }),
  multiValue: (provided) => ({
    ...provided,
    ...tw`bg-grey-100`,
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    ...tw`text-trailgrey-900`,
    ...(state.isDisabled ? tw`text-grey-400` : {}),
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    ...(state.isDisabled ? tw`bg-trailgrey-300` : tw`bg-trailgrey-400`),
  }),
  menuPortal: (provided) => ({
    ...provided,
    ...tw`z-popup`,
  }),
});

export const TdsSelectInput = <
  Value,
  IsMulti extends boolean = false
  // Group extends GroupBase<BaseOption<Value>> = GroupBase<BaseOption<Value>>
>({
  placeholder = 'Please select...',
  isSearchable = false,
  validationState,
  options,
  onChange,
  value,
  attachToBody = true,
  CustomDisplay,
  overrideValueUpdate,
  ...props
}: SelectProps<Value, IsMulti>) => {
  const handleOnChange = (
    newValue: OnChangeValue<BaseOption<Value>, IsMulti>
  ) => {
    let value: OnChangeValue<Value, IsMulti> | undefined = undefined;

    if (props.isMulti) {
      const multiValue = newValue as MultiValue<BaseOption<Value>>;
      value = multiValue.map((val) => val.value) as unknown as OnChangeValue<
        Value,
        IsMulti
      >;
    } else {
      const singleValue = newValue as SingleValue<BaseOption<Value>>;
      value = singleValue?.value as unknown as OnChangeValue<Value, IsMulti>;
    }

    if (overrideValueUpdate) {
      value = overrideValueUpdate(value);
    }

    onChange?.(value);
  };

  const flattenOptionGroups = (
    options: Options<BaseOption<Value> | GroupedOption<Value>>
  ): Options<BaseOption<Value>> => {
    const isOptionGroup = (option: BaseOption<Value> | GroupedOption<Value>) =>
      Object.keys(option).includes('options');

    const flattenedOptions = options.reduce((acc, option) => {
      if (isOptionGroup(option)) {
        return [...acc, ...(option as GroupedOption<Value>).options];
      } else {
        return [...acc, option as BaseOption<Value>];
      }
    }, [] as Options<BaseOption<Value>>);

    return flattenedOptions;
  };

  const getMatchingOptionFromValue = (
    targetOptions: Options<BaseOption<Value> | GroupedOption<Value>>,
    value: PropsValue<Value> | undefined,
    isMulti: boolean | undefined
  ) => {
    const flattenedOptions = flattenOptionGroups(targetOptions);

    const matchedOptions = flattenedOptions.filter((option) => {
      const baseOption = option as BaseOption<Value>;

      if (isMulti && Array.isArray(value) && value.includes(baseOption.value)) {
        return true;
      } else if (baseOption.value === value) {
        return true;
      }

      return false;
    });

    if (isMulti) {
      return matchedOptions;
    } else {
      return matchedOptions[0];
    }
  };

  /**
   * Take the selected value and transform it into the selected option.
   */
  const handleValue = (
    value: PropsValue<Value> | undefined
  ): PropsValue<BaseOption<Value>> | undefined => {
    // Select will only reset when the value is null but not when it's
    // undefined. This code works together with SelectField.tsx => handleValue()
    // to ensure the Select component is cleared when useForm => reset() is called.
    if (value === null) {
      return null;
    }

    const matchedOption = getMatchingOptionFromValue(
      options,
      value,
      props.isMulti
    );

    return matchedOption;
  };

  if (!props['aria-labelledby'] && !props['aria-label']) {
    console.warn(
      'Your must set the aria-label prop for the Select component when a label is not used to support assistive technologies.'
    );
  }

  const ValueContainer = useMemo(() => {
    return CustomDisplay
      ? getCustomValueContainer(CustomDisplay)
      : DefaultValueContainer;
  }, [CustomDisplay]);

  const customDisplayProps = CustomDisplay
    ? {
        isClearable: false,
        backspaceRemovesValue: false,
      }
    : {};

  return (
    <Select<BaseOption<Value>, IsMulti, GroupedOption<Value>>
      getOptionLabel={(option) => option.label}
      onChange={handleOnChange}
      value={handleValue(value)}
      components={{
        DropdownIndicator,
        ClearIndicator,
        Menu,
        MultiValueRemove,
        ValueContainer,
      }}
      styles={customStyles<BaseOption<Value>, IsMulti, GroupedOption<Value>>(
        validationState === 'invalid'
      )}
      {...props}
      aria-invalid={true}
      options={options}
      closeMenuOnSelect={!props.isMulti}
      placeholder={placeholder}
      isSearchable={isSearchable}
      menuPortalTarget={attachToBody ? document.body : undefined}
      {...customDisplayProps}
    />
  );
};
