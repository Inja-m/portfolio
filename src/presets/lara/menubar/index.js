export default {
    root: {
        class: [
            'relative',

            // Flexbox
            'flex',
            'items-end',

            // Spacing
            'p-2',

        ]
    },
    menu: ({ props }) => ({
        class: [
            // Flexbox
            'sm:flex',
            'items-center',
            'flex-wrap',
            'flex-col-reverse sm:flex-row-reverse',
            { hidden: !props?.mobileActive, flex: props?.mobileActive },

            // Position
            'absolute sm:relative',
            'top-full left-0',
            'sm:top-auto sm:right-auto',

            // Size
            'w-full sm:w-screen',

            // Spacing
            'm-0',
            'py-1 sm:py-0 sm:p-0',
            'list-none',

            // Shape
            'shadow-md sm:shadow-none',
            'border-0',

            // Color
            'bg-surface-0 dark:bg-surface-700 sm:bg-transparent',

            // Misc
            'outline-none'
        ]
    }),
    menuitem: {
        class: 'sm:relative sm:w-auto w-full static'
    },
    content: ({ props, context }) => {
		console.log(context.item.item)
		return {
        class: [
            // Shape
            { 'rounded-md': props.root },
			
            // Transitions
            'transition-all',
            'duration-200'

        ]
	}
    },
    action: ({ context}) => ({
        class: [
            'relative',

            // Flexbox
            'flex',
            'items-center',

            // Spacing
            'py-3',
            'px-5',

			{
				'text-surface-500 dark:text-white/70': !context.item.item.active,
				'text-surface-950 dark:text-white/50': context.item.item.active
			},

            // Size
            {
                'pl-9 sm:pl-5': context.level === 1,
                'pl-14 sm:pl-5': context.level === 2
            },
            'leading-none',
            // Misc
            'select-none',
            'cursor-pointer',
            'no-underline ',
            'overflow-hidden'
        ]
    }),
    icon: {
        class: 'mr-2'
    },
    submenuicon: ({ props }) => ({
        class: [
            {
                'ml-auto sm:ml-2': props.root,
                'ml-auto': !props.root
            }
        ]
    }),
    submenu: ({ props }) => ({
        class: [
            // Size
            'w-full sm:w-48',

            // Spacing
            'py-1',
            'm-0',
            'list-none',

            // Shape
            'shadow-none sm:shadow-md',
            'border-0',

            // Position
            'static sm:absolute',
            'z-10',
            { 'sm:absolute sm:left-full sm:top-0': props.level > 1 },

            // Color
            'bg-surface-0 dark:bg-surface-700'
        ]
    }),
    separator: {
        class: 'border-t border-surface-200 dark:border-surface-600 my-1'
    },
    button: {
        class: [
            // Flexbox
            'flex sm:hidden',
            'items-center justify-center',

            // Size
            'w-8',
            'h-8',

            // Shape
            'rounded-full',

            // Transitions
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-pointer',
            'no-underline'
        ]
    },
    end: {
        class: 'ml-auto self-center'
    }
};
