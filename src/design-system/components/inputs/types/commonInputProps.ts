export type CommonInputProps = {
  /** Set the input as disabled. */
  isDisabled?: boolean;
  /** Set the input as read only. */
  isReadOnly?: boolean;
  /** Set the input as required. */
  isRequired?: boolean;
  /**
   * Set the input as restricted. Functionally this is the same as `isReadOnly`,
   * but styled with reduced prominance.
   *
   * This is intended to be used in a form where some fields are not editable.
   **/
  isRestricted?: boolean;
};
