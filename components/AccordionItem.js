import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AccordionItem = ({ question, answer, order, isExpandedGlobally }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(isExpandedGlobally);
  }, [isExpandedGlobally]);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.header, expanded && styles.headerExpanded]} 
        onPress={toggleExpand}
        activeOpacity={0.7}
      >
        <View style={styles.questionContainer}>
          <Text style={styles.orderText}>{order}.</Text>
          <Text style={styles.questionText}>{question}</Text>
        </View>
        {expanded ? <ChevronUp size={20} color="#22d3ee" /> : <ChevronDown size={20} color="#94a3b8" />}
      </TouchableOpacity>
      
      {expanded && (
        <View style={styles.answerContainer}>
          <View style={styles.divider} />
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    backgroundColor: '#1e293b',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#334155',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerExpanded: {
    borderBottomWidth: 0,
  },
  questionContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  orderText: {
    color: '#22d3ee',
    fontWeight: 'bold',
    marginRight: 8,
    fontSize: 16,
  },
  questionText: {
    color: '#f1f5f9',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  answerContainer: {
    padding: 16,
    paddingTop: 0,
    backgroundColor: '#1e293b',
  },
  divider: {
    height: 1,
    backgroundColor: '#334155',
    marginBottom: 12,
  },
  answerText: {
    color: '#cbd5e1',
    fontSize: 15,
    lineHeight: 22,
  },
});

export default AccordionItem;
