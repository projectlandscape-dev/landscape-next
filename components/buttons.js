import styled from "styled-components";
import Link from "next/link";

export const ButtonPrimary = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-alfa-slab-one);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.25s linear;

  background: var(--clr-accent);
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  &:hover {
    background: var(--clr-accent-darker);
    color: var(--txt-light);
  }

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * + * {
      margin-left: 0;
      padding-left: 0;
    }
  }

  @media screen and (max-width: 400px) {
    font-size: var(--fs-xs); 
    padding: 0.1em 0.3em;
    text-align: center;
  }
`

export const ButtonPrimaryDark = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-alfa-slab-one);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;
  text-transform: uppercase;
  background: var(--clr-dark);
  color: var(--txt-light);
  border: 1px solid var(--clr-dark);
  border-radius: 4px;

  &:hover {
    background: #000;
    color: var(--txt-light);
  }
`

export const ButtonSecondary = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-alfa-slab-one);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: capitalize;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: transparent;
  color: var(--clr-accent);
  border: 1px solid var(--clr-accent);

  &:hover {
    opacity: 0.8;
    color: var(--clr-accent);
  }
`
export const ButtonSecondaryLight = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-alfa-slab-one);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;
  text-transform: uppercase;
  background: var(--clr-tan);
  color: var(--txt-dark);
  border: 1px solid var(--clr-tan);
  min-width: 120px;
  width: fit-content;

  @media (max-width: 768px) {
    font-size: var(--fs-xs);
    padding: 0.2em 0.2em;
    min-width: auto;
  }

  &:hover {
    color: var(--txt-dark);
  }
`
export const ButtonSecondaryDark = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-alfa-slab-one);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: capitalize;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: transparent;
  color: var(--clr-dark);
  border: 1px solid var(--clr-dark);

  &:hover {
    opacity: 0.8;
    color: var(--clr-dark);
  }
`

export const ButtonUnderline = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-alfa-slab-one);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  font-style: italic;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--clr-accent);
  transition: color 0.3s ease;
  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;

    & > * + * {
      margin-left: 0;
      padding-left: 0;
    }
  }
  &:hover {
    color: var(--clr-hover);
  }
`
export const ButtonInline = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  color: var(--clr-accent);
  text-decoration: none;
  &:hover {
    color: var(--clr-accent);
  }
`

// Anchors
export const AnchorPrimary = styled(Link)`
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-alfa-slab-one);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: var(--clr-accent);
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * + * {
      margin-left: 5px;
    }
  }

  &:hover {
    background: var(--clr-accent-darker);
    color: var(--txt-light);
  }
`

export const AnchorSecondary = styled(Link)`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: var(--clr-dark);
  color: var(--txt-light);
  border: 1px solid var(--txt-light);

  &:hover {
    opacity: 0.8;
  }
`
export const AnchorSecondaryDark = styled(Link)`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: transparent;
  color: var(--clr-dark);
  border: 1px solid var(--clr-dark);

  &:hover {
    opacity: 0.8;
  }
`

export const AnchorUnderline = styled(Link)`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  font-style: italic;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--clr-accent);

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;

    & > * + * {
      margin-left: 0;
      padding-left: 0;
    }
  }
  &:hover {
    color: var(--clr-accent);
  }
`

export const AnchorInline = styled(Link)`
  cursor: pointer;
  display: inline;
  color: var(--clr-accent);
  text-decoration: none;

  span.light {
    color: var(--txt-light);
  }

  span.dark {
    color: var(--txt-dark);
  }

  &:hover {
    color: var(--clr-accent);
  }
`