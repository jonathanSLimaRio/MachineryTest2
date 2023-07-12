export const modalContent = [
    {
      step: 1,
      top: {
        title: 'Attachment Finder - Step 1',
        closeButton: true,
      },
      subTitle: 'What type of machine will this attachment be installed on?',
      body: [
        {
          cardTitle: 'Excavator',
          cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          cardTitle: 'Skid Steer',
          cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
      footer: {
        text: 'Not sure? Talk to an expert',
        buttons: [{ label: 'Next' }],
      },
    },
    {
      step: 2,
      top: {
        title: 'Attachment Finder - Step 2',
        closeButton: true,
      },
      subTitle: 'What is the Hydraulic Flow of your skid steer in GPM (Gallons per Minute)?',
      body: [
        {
          cardTitle: 'Standard Flow (17-25 GPM)',
          cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          cardTitle: 'High Flow (30-45 GPM)',
          cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
      footer: {
        text: 'Not sure? Talk to an expert',
        buttons: [{ label: 'Back' }, { label: 'Next' }],
      },
    },
    {
      step: 3,
      top: {
        title: 'Attachment Finder - Step 3',
        closeButton: true,
      },
      subTitle: 'What type of material will this attachment be used for?',
      body: [
        {
          cardTitle: 'Short (e.g., small trunks)',
          cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icon: 'WoodShort',
        },
        {
          cardTitle: 'Medium (e.g., small trees)',
          cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icon: 'WoodMedium',
        },
        {
          cardTitle: 'Long (e.g., large trees)',
          cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          icon: 'WoodLong',
        },
      ],
      footer: {
        text: 'Not sure? Talk to an expert',
        buttons: [{ label: 'Back' }, { label: 'Next' }],
      },
    },
    {
      step: 4,
      top: {
        title: 'Loading...',
        closeButton: false,
      },
      subTitle: 'We are selecting the best attachments for your equipment',
      body: [
        {
          cardTitle: '',
          cardDescription: '',
          icon: 'Loading',
        },
      ],
      footer: null,
    },
    {
      step: 5,
      top: {
        title: '3 Wood Splitters match your equipment',
        closeButton: true,
      },
      subTitle: 'What type of machine will this attachment be installed on?',
      body: [
        {
          cardTitle: 'HF309',
          cardDescription: 'Tool',
          icon: 'Tool',
        },
        {
          cardTitle: 'HF150',
          cardDescription: 'Tool',
          icon: 'Tool',
        },
        {
          cardTitle: 'HF400',
          cardDescription: 'Tool',
          icon: 'Tool',
        },
      ],
      footer: {
        text: 'Not sure? Talk to an expert',
        buttons: [
          {
            label: 'Compare models',
            link: 'https://www.machinerypartner.com/',
          },
        ],
      },
    },
  ];
  