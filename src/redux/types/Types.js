///////////////////////////////////////////////////////////////////
//## Start all types
export const GET_ERROR = "GET_ERROR";
export const GET_FORMS = "GET_FORMS";
export const tokenStudentUsername = localStorage.getItem("AllDataStudent");
// export const tokenStudentUsername = "06230";
export const tokenSopervisorUsername = "2eZ7N";
export const tokenCompanyUsername = "Jqotc";
export let countTimeLine = 0;
//## End all vars
///////////////////////////////////////////////////////////////////
//## Start Student
export const GET_ALL_STUDENT = "GET_ALL_STUDENT";
// export const INSERT_ALL_STUDENT = "INSERT_ALL_STUDENT";
// export const GET_STUDENT_BY_USERNAME = "GET_STUDENT_BY_USERNAME";

//## End Student
///////////////////////////////////////////////////////////////////
//## Start Sopervisor
export const GET_ALL_SOPERVISOR = "GET_ALL_SOPERVISOR";
export const GET_SOPERVISOR_BY_USERNAME = "GET_SOPERVISOR_BY_USERNAME";
//## End Sopervisor
///////////////////////////////////////////////////////////////////
//## Start Company
export const GET_ALL_COMPANY = "GET_ALL_COMPANY";
export const GET_COMPANY_BY_USERNAME = "GET_COMPANY_BY_USERNAME";
//## End Company
///////////////////////////////////////////////////////////////////
//## Start Tasks
export const GET_ALL_TASKS = "GET_ALL_TASKS";
export const GET_TASKS_BY_USERNAME = "GET_TASKS_BY_USERNAME";
//## End Tasks
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//## Start Skills
export const GET_ALL_SKILLS = "GET_ALL_SKILLS";
export const GET_SKILLS_BY_USERNAME = "GET_SKILLS_BY_USERNAME";
//## End Skills
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//## Start Grades
export const GET_ALL_GRADES = "GET_ALL_GRADES";
export const GET_GRADES_BY_USERNAME = "GET_GRADES_BY_USERNAME";
//## End Grades
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//## Start Submissitions
export const GET_SUBMISSITIONS_BY_USERNAME = "GET_SUBMISSITIONS_BY_USERNAME";
export const ADD_SUBMISSITIONS = "ADD_SUBMISSITIONS";
//## End Submissitions
///////////////////////////////////////////////////////////////////
//## Start Auth
export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_REGISTER = "AUTH_REGISTER";
//## End Submissitions
///////////////////////////////////////////////////////////////////
//## Start forms (title,subTitle)
export const dataForms = {
  mainStudent: "المتدرب",
  mainSopervisor: "المشرف",
  Guidance: {
    title: "توجية المتدرب",
    subTitle: "يعبأ من مشرف التدريب التعاوني بالقسم",
  },
  DirectTrining: {
    title: "مباشرة التدريب",
    subTitle: "يعبأ من جهة التدريب",
  },
  RequestTrining: {
    title: "طلب فرص تدريب",
    subTitle:
      "نفيدكم علماً بأن المتدربة الموضحة بياناتها أعلاه هي إحدى متدربات الكلية التقنية للبنات بالرياض المتوقع التحاقهن ببرنامج التدريب التعاوني للفصل التدريبي الثاني من العام التدريبي 1440/1441هـ, وترغب في تطبيق البرنامج لديكم لمدة فصل تدريبي كامل ابتداءً من 8 / 6 / 1441هـ الموافق 2 / 2 / 2020 م  ولمدة 13 أسبوع (بمعدل لا يقل عن 390 ساعة ), فنرجو من سعادتكم منحها الفرصة و اعتماد ذلك بملء المعلومات أدناه بأنه سيتم تأكيد التدريب للفرص المتاحة بخطاب رسمي من الكلية التقنية للبنات بالرياض موجه لكم. شاكرين لكم حسن تعاونكم معنا,,,",
  },
  EnrollCoopTrining: {
    title: "التحاق بالتدريب التعاوني",
    subTitle:
      "تسلم رغبات التدريب في الوقت المحدد في الإعلان أو لن يقبل طلب المتدربةفي حال عدم تعبئة الرغبات بشكل صحيح ستحدد منسقة التدريب التعاوني جهة التدريب للمتدربة حسب الفرص المتاحة",
  },
  RequestException: {
    title: "طلب استثناء",
    subTitle: "هو من  تبقى له مقرر في التدريب التعاوني",
  },

  TriningProcess: {
    title: "سير العملية التدريبية",
    subTitle: "يعبأ النموذج لكل جهه على حده",
  },

  TriningAvalibleInCompany: {
    title: "الفرص التدريبية المتاحة في المنشأة",
    subTitle: "يعبأ من قبل المنشأة",
  },
};

//## End forms (title,subTitle)
