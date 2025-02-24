import React, {
  type FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import dayjs from 'dayjs';

import Select from 'antd/es/select';

import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher: FC = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const initialedDayjsLocaleRef = useRef(false);

  useEffect(() => {
    if (initialedDayjsLocaleRef.current) return;

    dayjs.locale(i18n.language);
    initialedDayjsLocaleRef.current = true;
  }, [i18n.language]);

  const handleChange = useCallback(
    (locale: string) => {
      setLanguage(locale);
      dayjs.locale(locale);

      const { asPath, pathname, query } = router;
      router.replace({ pathname, query }, asPath, { locale });
    },
    [router]
  );

  return (
    <Select
      className={styles.languageSwitcher}
      popupClassName={styles.popup}
      popupMatchSelectWidth={false}
      size="large"
      suffixIcon={null}
      value={language}
      onChange={handleChange}
    >
      <Select.Option className={styles.option} value="en">
        <span className="short–name">Eng</span>
        <span className="full–name">English</span>
      </Select.Option>
      <Select.Option className={styles.option} value="uk">
        <span className="short–name">Укр</span>
        <span className="full–name">Українська</span>
      </Select.Option>
    </Select>
  );
};
