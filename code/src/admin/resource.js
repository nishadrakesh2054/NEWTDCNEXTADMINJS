import bcrypt from "bcrypt";
import uploadFeature from "@adminjs/upload";
import { componentLoader } from "./componentsLoader.js";
import Gallery from "../../models/galleryModel.js";
import Contact from "../../models/contactModel.js";
import BrandLogo from "../../models/brandModel.js";
import User from "../../models/GetTouchModel.js";
import Users from "../../models/UserModel.js";
import SpecialCamps from "../../models/SpecialCapmsModel.js";
import HeroSlider from "../../models/HeroModel.js";
import Academy from "../../models/academyModel.js";
import Program from "../../models/programModel.js";
import AgeGroup from "../../models/ageGroupModel.js";
import Career from "../../models/careerModel.js";
import Application from "../../models/applicationModel.js";
import Multimedia from "../../models/multimediaModel.js";
import ThunderBoltsReg from "../../models/TDC/RegisterFormModel.js";
import TDCPayment from "../../models/TDC/paymentModel.js";
import TDCManualReg from "../../models/TDC/ManualRegModel.js";

const localProvider = {
  bucket: "public/uploads",
  opts: {
    baseUrl: "/uploads",
  },
};

// Hashing function for passwords
const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

export const Resources = [
  /*---------------------------------------------------------------------------------------ThunderBolts Development Center--------------------------------------*/
  //registration
  {
    resource: ThunderBoltsReg,
    options: {
      navigation: {
        name: "TDC REGISTRATION",
      },
      listProperties: [
        "fullName",
        "email",
        "contactNo",
        "sports",
        "category",
        "days",
        "time",
      ],
      editProperties: [
        "fullName",
        "address",
        "contactNo",
        "email",
        "dob",
        "age",
        "gender",
        "schoolName",
        "parentName",
        "parentEmail",
        "parentContactNo",
        "parentAddress",
        "sports",
        "category",
        "days",
        "time",
        "emergencyContactPersonName",
        "emergencyContactPersonNumber",
        "hasMedicalConditions",
        "medicalDetails",
        "hasMedicalInsurance",
        "insuranceNo",
        "transportation",
        "notes",
        "agreement",

        "prn",
      ],
      showProperties: [
        "fullName",
        "address",
        "contactNo",
        "email",
        "dob",
        "age",
        "gender",
        "schoolName",
        "parentName",
        "parentEmail",
        "parentContactNo",
        "parentAddress",
        "sports",
        "category",
        "time",
        "days",
        "emergencyContactPersonName",
        "emergencyContactPersonNumber",
        "hasMedicalConditions",
        "medicalDetails",
        "hasMedicalInsurance",
        "insuranceNo",
        "transportation",
        "notes",
        "agreement",
        "prn",
      ],

      actions: {
        list: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        edit: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        new: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        show: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        delete: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
      },
    },
  },

  //payment
  {
    resource: TDCPayment,
    options: {
      navigation: {
        name: "TDC REGISTRATION",
      },
      listProperties: [
        "_id",
        "fullName",
        "email",
        "sports",
        "amount",
        "category",
        "time",
        "days",
        "paymentMethod",
        "status",
      ],

      properties: {
        registrationId: { position: 1, label: "Registration Ref" },
        transactionId: { position: 2, label: "Transaction ID" },
        paymentDate: { position: 3, label: "Payment Date" },
        status: { position: 4, label: "Payment Status" },
        fullName: { position: 5, label: "Full Name" },
        email: { position: 6, label: "Email Address" },
        sports: { position: 7, label: "Sports" },
        amount: { position: 8, label: "Amount (NPR)" },
        category: { position: 9, label: "Category" },
        time: { position: 10, label: "Training Time" },
        days: { position: 11, label: "Training Days" },
        paymentMethod: { position: 12, label: "Payment Method" },

        currency: { position: 13, label: "Currency" },

        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin &&
            (currentAdmin.role === "admin" ||
              currentAdmin.role === "sub-admin"),
        },
        edit: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        new: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        show: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin &&
            (currentAdmin.role === "admin" ||
              currentAdmin.role === "sub-admin"),
        },
        delete: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
      },
    },
  },
  //manaula registration tdc
  {
    resource: TDCManualReg,
    options: {
      navigation: {
        name: "TDC REGISTRATION",
      },

      properties: {
        _id: { isVisible: false },
        fullName: { isVisible: true, position: 1, label: "Full Name" },
        email: { isVisible: true, position: 2, label: "Email Address" },
        address: { isVisible: true, position: 3 },
        ContactNo: { isVisible: true, position: 4 },
        DateOfBirth: { isVisible: true, position: 5, label: "Date of Birth" },
        age: { isVisible: true, position: 6 },
        gender: { isVisible: true, position: 7 },
        schoolName: { isVisible: true, position: 8 },
        sports: { isVisible: true, position: 9 },
        sportsCategory: { isVisible: true, position: 10 },
        trainingDays: { isVisible: true, position: 11 },
        trainingTime: { isVisible: true, position: 12 },

        parentName: { isVisible: true, position: 13 },
        parentEmail: {
          isVisible: { list: false, filter: true, show: true, edit: true },
          position: 14,
        },
        parentContactNo: { isVisible: true, position: 15 },
        parentAddress: { isVisible: true, position: 16 },

        emergencyContactPersonName: { isVisible: true, position: 17 },
        emergencyContactPersonNumber: { isVisible: true, position: 18 },

        hasMedicalCondition: {
          isVisible: true,
          position: 19,
          type: "boolean",
        },
        medicalDetails: { isVisible: true, position: 20 },

        hasMedicalInsurance: {
          isVisible: true,
          position: 21,
          type: "boolean",
        },
        insuranceNo: { isVisible: true, position: 22 },

        transportation: {
          isVisible: true,
          position: 23,
          type: "boolean",
          label: "Transportation Required",
          availableValues: [
            { value: true, label: "Yes" },
            { value: false, label: "No" },
          ],
        },

        paymentType: { isVisible: true, position: 24 },
        totalAmount: { isVisible: true, position: 25 },
        notes: { isVisible: true, position: 26 },
        agreement: { isVisible: true, position: 27 },

        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        edit: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        new: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        show: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
        delete: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
        },
      },
    },
  },

  /*---------------------------------------------------------------------------------------Photo or gallery  management--------------------------------------*/
  // for Hero or home slider section
  {
    resource: HeroSlider,
    options: {
      navigation: {
        name: "Media",
        icon: "Camera",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },
  // for gallery section
  {
    resource: Gallery,
    options: {
      navigation: {
        name: "Media",
        icon: "Image",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },
  // for brand logo
  {
    resource: BrandLogo,
    options: {
      navigation: {
        name: "Media",
        icon: "Camera",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },

        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
      },

      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },

        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },
  //   for multimedia upload
  {
    resource: Multimedia,
    options: {
      navigation: {
        name: "Media",
        icon: "Image",
      },
      properties: {
        _id: { isVisible: false },
        images: {
          type: "file",
          isArray: true,
          isVisible: { list: true, edit: true, filter: true, show: true },
        },

        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        multiple: true,
        properties: {
          filePath: "images",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          //   return `${filename}`;
          return `Multimedia/${Date.now()}_${filename}`;
        },
      }),
    ],
  },

  /*-----------------------------------------------------------------------------------------Academic resource management----------------------------------------*/

  //   academic resource
  {
    resource: Academy,
    options: {
      navigation: {
        name: "Academic Management",
        icon: "School",
      },
      properties: {
        _id: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },
  //   Program resource
  {
    resource: Program,
    options: {
      navigation: {
        name: "Academic Management",
        icon: "School",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },
  //   for age group
  {
    resource: AgeGroup,
    options: {
      navigation: {
        name: "Academic Management",
        icon: "School",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },
  /*-----------------------------------------------------------------------------------for Special Capms or events ------------------------------------------------*/

  // for Special Capms section
  {
    resource: SpecialCamps,
    options: {
      navigation: {
        name: "Events",
        icon: "Image",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },

  /*--------------------------------------------------------------------------------Career model management--------------------------------------------------------*/
  // 1. Application config
  {
    resource: Application,
    options: {
      navigation: { name: "Careers", icon: "Briefcase" },

      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },
  // 2. career config
  {
    resource: Career,
    options: {
      navigation: { name: "Careers", icon: "Briefcase" },

      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
      properties: {
        description: {
          type: "richtext",
          custom: {
            quill: {
              modules: {
                toolbar: [
                  ["bold", "italic", "underline", "strike"],
                  ["blockquote", "code-block"],
                  [{ header: 1 }, { header: 2 }],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ script: "sub" }, { script: "super" }],
                  [{ indent: "-1" }, { indent: "+1" }],
                  [{ direction: "rtl" }],
                  [{ size: ["small", false, "large", "huge"] }],
                  [{ header: [1, 2, 3, 4, 5, 6, false] }],
                  [{ color: [] }, { background: [] }],
                  [{ font: [] }],
                  [{ align: [] }],
                  ["clean"],
                ],
              },
              theme: "snow",
              placeholder: "Type your content here...",
              bounds: ".admin-bro_Edit",
            },
          },
        },
      },
    },
  },

  /*--------------------------------- ------------------------------------------------communication and engagement functions----------------------------------------*/

  // for contact section
  {
    resource: Contact,
    options: {
      navigation: { name: "Communication", icon: "User" },
      properties: {
        _id: { isVisible: false },
        name: {
          label: "Full Name",
          position: 1,
        },
        email: {
          label: "Email Address",
          position: 2,
        },
        phone: {
          label: "Phone Number",
          position: 3,
        },
        subject: {
          label: "Subject",
          position: 4,
        },
        message: {
          label: "Message",
          type: "textarea",
          position: 5,
        },
        notes: {
          label: "Subscribed to Updates",
          position: 6,
          availableValues: [
            { value: true, label: "Yes" },
            { value: false, label: "No" },
          ],
        },
        createdAt: {
          isVisible: { list: true, filter: true, show: true, edit: false },
          position: 7,
        },
        updatedAt: {
          isVisible: { list: false, filter: false, show: true, edit: false },
          position: 8,
        },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },
  
  //   get in touch section
  {
    resource: User,
    options: {
      navigation: { name: "Communication", icon: "User" },
      properties: {
        _id: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },

  /*--------------------------------- -------------------------------------------------authentication on role based acces----------------------------------------------*/

  {
    resource: Users,
    options: {
      navigation: { name: "Admin Access Management", icon: "User" },
      properties: {
        _id: {
          isVisible: { list: false, filter: false, show: false, edit: false },
        },
        password: {
          isVisible: { list: false, filter: false, show: false, edit: true },
        },
      },

      actions: {
        new: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
          before: async (request) => {
            if (request.payload?.password) {
              // Hash the password before saving a new user
              request.payload.password = await hashPassword(
                request.payload.password
              );
            }
            return request;
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
          before: async (request) => {
            if (request.method === "post") {
              if (request.payload?.password) {
                // Hash the new password if it is being updated
                request.payload.password = await hashPassword(
                  request.payload.password
                );
              } else {
                // If password is not provided, remove it from the payload to avoid overwriting with empty
                delete request.payload?.password;
              }
            }
            return request;
          },
        },
        show: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
          after: async (response) => {
            // Ensure the password is not shown in the show view
            response.record.params.password = "";
            return response;
          },
        },
        list: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
          after: async (response) => {
            // Ensure the password is not shown in the list view
            response.records.forEach((record) => {
              record.params.password = "";
            });
            return response;
          },
        },
      },
    },
  },
];
