import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {LINK} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = '王腾腾出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Bella',
          title: 'Bella',
          href: LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/>BellaGITHUB</>,
          href: 'https://github.com/BellaYoungFlowers',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
