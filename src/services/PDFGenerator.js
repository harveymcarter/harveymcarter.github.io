import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: '40 60',
    fontFamily: 'Times-Roman'
  },
  header: {
    borderBottom: '2 solid #333333',
    paddingBottom: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  headerContent: {
    flex: 1
  },
  photoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    border: '1 solid #dddddd'
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  headerTitle: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Times-Bold',
    color: '#1a1a1a',
    marginBottom: 5
  },
  headerSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Times-Roman',
    color: '#4a4a4a',
    marginBottom: 10
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 10,
    fontFamily: 'Times-Roman',
    color: '#666666',
    gap: 15
  },
  section: {
    marginBottom: 15,
    paddingBottom: 10
  },
  sectionTitle: {
    fontSize: 14,
    color: '#1a1a1a',
    fontFamily: 'Times-Bold',
    textTransform: 'uppercase',
    borderBottom: '1 solid #dddddd',
    paddingBottom: 5,
    marginBottom: 10
  },
  text: {
    fontSize: 10,
    marginBottom: 5,
    fontFamily: 'Times-Roman',
    color: '#333333',
    lineHeight: 1.4
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none'
  },
  skillsContainer: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20
  },
  skillCategory: {
    flex: 1,
    minWidth: '45%',
    marginBottom: 10
  },
  skillTitle: {
    fontSize: 11,
    fontFamily: 'Times-Bold',
    color: '#4a4a4a',
    marginBottom: 5
  },
  skillList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5
  },
  skill: {
    fontSize: 9,
    fontFamily: 'Times-Roman',
    backgroundColor: '#f3f4f6',
    padding: '3 6',
    borderRadius: 2,
    color: '#4a4a4a'
  },
  experienceItem: {
    marginBottom: 12
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3
  },
  experienceTitle: {
    fontSize: 11,
    fontFamily: 'Times-Bold',
    color: '#1a1a1a'
  },
  experienceDate: {
    fontSize: 10,
    fontFamily: 'Times-Roman',
    color: '#666666'
  },
  experienceCompany: {
    fontSize: 10,
    fontFamily: 'Times-Roman',
    color: '#4a4a4a',
    fontStyle: 'italic',
    marginBottom: 3
  },
  achievementList: {
    marginLeft: 10,
    marginTop: 3
  },
  achievement: {
    fontSize: 9,
    fontFamily: 'Times-Roman',
    color: '#4a4a4a',
    marginBottom: 2,
    lineHeight: 1.4
  },
  twoColumnSection: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 15
  },
  column: {
    flex: 1
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3
  }
});

const sectionTitles = {
  en: {
    summary: 'Professional Summary',
    skills: 'Technical Skills',
    experience: 'Professional Experience',
    education: 'Education',
    certifications: 'Certifications',
    languages: 'Languages',
    links: 'Professional Links',
    achievements: 'Key Achievements'
  },
  tr: {
    summary: 'Profesyonel Özet',
    skills: 'Teknik Yetenekler',
    experience: 'Profesyonel Deneyim',
    education: 'Eğitim',
    certifications: 'Sertifikalar',
    languages: 'Diller',
    links: 'Profesyonel Bağlantılar',
    achievements: 'Önemli Başarılar'
  },
  ru: {
    summary: 'Профессиональное резюме',
    skills: 'Технические навыки',
    experience: 'Профессиональный опыт',
    education: 'Образование',
    certifications: 'Сертификаты',
    languages: 'Языки',
    links: 'Профессиональные ссылки',
    achievements: 'Ключевые достижения'
  },
  hr: {
    summary: 'Profesionalni sažetak',
    skills: 'Tehničke vještine',
    experience: 'Radno iskustvo',
    education: 'Obrazovanje',
    certifications: 'Certifikati',
    languages: 'Jezici',
    links: 'Profesionalne poveznice',
    achievements: 'Ključna postignuća'
  }
};

const ResumePDF = ({ data, language }) => {
  const titles = sectionTitles[language] || sectionTitles.en;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          {data.personalInfo.photo && (
            <View style={styles.photoContainer}>
              <Image style={styles.photo} src={data.personalInfo.photo} />
            </View>
          )}
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>{data.personalInfo.name}</Text>
            <Text style={styles.headerSubtitle}>{data.personalInfo.title}</Text>
            <View style={styles.contactInfo}>
              <Text>{data.personalInfo.email}</Text>
              <Text>•</Text>
              <Text>{data.personalInfo.phone}</Text>
              <Text>•</Text>
              <Text>{data.personalInfo.location}</Text>
            </View>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{titles.summary}</Text>
          <Text style={styles.text}>{data.personalInfo.summary}</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{titles.skills}</Text>
          <View style={styles.skillsContainer}>
            {Object.entries(data.skills).map(([category, skills]) => (
              <View key={category} style={styles.skillCategory}>
                <Text style={styles.skillTitle}>{category}</Text>
                <View style={styles.skillList}>
                  {skills.map((skill, index) => (
                    <Text key={index} style={styles.skill}>{skill}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{titles.experience}</Text>
          {data.experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.experienceTitle}>{exp.title}</Text>
                <Text style={styles.experienceDate}>{exp.period}</Text>
              </View>
              <Text style={styles.experienceCompany}>{exp.company}</Text>
              <Text style={[styles.text, { marginBottom: 3 }]}>{exp.description}</Text>
              <View style={styles.achievementList}>
                {exp.achievements.map((achievement, i) => (
                  <Text key={i} style={styles.achievement}>• {achievement}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Two Column Section */}
        <View style={styles.twoColumnSection}>
          {/* Education */}
          <View style={styles.column}>
            <Text style={styles.sectionTitle}>{titles.education}</Text>
            {data.education.map((edu, index) => (
              <View key={index} style={{ marginBottom: 8 }}>
                <Text style={[styles.text, { fontFamily: 'Times-Bold' }]}>{edu.degree}</Text>
                <Text style={[styles.text, { color: '#666666' }]}>
                  {edu.school}, {edu.period}
                </Text>
                <Text style={[styles.text, { fontSize: 9 }]}>{edu.description}</Text>
              </View>
            ))}
          </View>

          {/* Certifications and Languages */}
          <View style={styles.column}>
            <View style={[styles.section, { marginBottom: 15 }]}>
              <Text style={styles.sectionTitle}>{titles.certifications}</Text>
              {data.certifications.map((cert, index) => (
                <Text key={index} style={[styles.text, { marginBottom: 3 }]}>
                  • {cert.name} ({cert.date})
                </Text>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{titles.languages}</Text>
              {data.languages.map((lang, index) => (
                <View key={index} style={styles.languageItem}>
                  <Text style={styles.text}>{lang.name}</Text>
                  <Text style={[styles.text, { color: '#666666' }]}>{lang.proficiency}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Links */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{titles.links}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {data.socialLinks.map((link, index) => (
              <Link key={index} style={[styles.text, styles.link]} src={link.url}>
                {link.platform}
              </Link>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF; 