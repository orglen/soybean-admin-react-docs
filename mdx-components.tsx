// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs';

const { img: Image, table: Table, th: Th, tr: Tr, ...docsComponents } = getDocsMDXComponents();

export const useMDXComponents: typeof getDocsMDXComponents = components => ({
  ...docsComponents,
  figcaption: props => (
    <figcaption
      className="mt-2 text-center text-sm"
      {...props}
    />
  ),
  figure: props => (
    <figure
      className="mt-6"
      {...props}
    />
  ),
  img: props => (
    <Image
      {...props}
      className="nextra-border rounded-xl border drop-shadow-sm"
    />
  ),
  table: props => (
    <Table
      className="w-full text-sm"
      {...props}
    />
  ),
  tbody: props => (
    <tbody
      className="break-words first:[&_td]:font-semibold first:[&_td]:text-violet-600 first:[&_td]:dark:text-violet-500 [&_tr]:!bg-transparent"
      {...props}
    />
  ),
  th: Th,
  thead({ children, ...props }) {
    return (
      <thead {...props}>
        {children.props.children[0].props.children ? (
          children
        ) : (
          <Tr>
            <Th align="left">Option</Th>
            <Th align="left">Type</Th>
            {children.props.children.length === 4 && <Th align="left">Default Value</Th>}
            <Th align="left">Description</Th>
          </Tr>
        )}
      </thead>
    );
  },
  tr: Tr,
  ...components
});
