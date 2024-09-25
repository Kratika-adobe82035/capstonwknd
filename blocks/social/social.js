export default async function decorate(block) {
    [...block.children].forEach((row) => {
      [...row.children].forEach((child) => {
        [...child.children].forEach((subChild) => {
          [...subChild.children].forEach((anchor) => {
            anchor.target = '_blank';
          });
        });
      });
    });
  }