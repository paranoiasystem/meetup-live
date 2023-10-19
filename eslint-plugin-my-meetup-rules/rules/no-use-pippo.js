module.exports = {
    meta: {
      type: 'problem', 
      docs: {
        description: 'Non utilizzare "pippo" come nome per variabili o costanti.',
        category: 'bad-practice',
        recommended: true,
        url: 'https://raw.githubusercontent.com/paranoiasystem/sonarqube-meetup/main/eslint-plugin-my-meetup-rules/docs/no-use-pippo.md',
      },
      severity: 1, 
    },
    create(context) {
        return {
            Identifier(node) {
                if (node.name === 'pippo') {
                    context.report({
                        node,
                        message: 'Non utilizzare "pippo" come nome per variabili o costanti.',
                    });
                }
            },
        };
    }
  };
  