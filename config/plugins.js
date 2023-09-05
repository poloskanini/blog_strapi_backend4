// module.exports = ({ env }) => ({

//   slugify: {
//     enabled: true,
//     config: {
//       contentTypes: {
//         article: {
//           field: 'slug',
//           references: 'title',
//         },
//       },
//     },
//   },

// });

module.exports = ({ env }) => ({
  ckeditor5: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor"
  },
});