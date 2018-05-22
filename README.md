# prettier-ruby

This is a work in progress plugin for prettier that supports the Ruby programming language. Under the hood it uses the [`ripperjs`](https://github.com/kddeisz/ripperjs) package (which in turn uses Ruby's own `ripper` library) which allows this package to maintain parity with the existing Ruby parser.

## Status

There are a lot of node types to support still, as well as tests to write for each. Below is the list of types and their current status.

### Incomplete:

- [ ] BEGIN
- [ ] END
- [ ] alias_error
- [ ] aref_field
- [ ] arg_ambiguous
- [ ] args_add
- [ ] args_add_star
- [ ] args_new
- [ ] assign_error
- [ ] assoc_new
- [ ] assoc_splat
- [ ] assoclist_from_args
- [ ] bare_assoc_hash
- [ ] blockarg
- [ ] class_name_error
- [ ] command_call
- [ ] const_path_field
- [ ] defs
- [ ] dyna_symbol
- [ ] excessed_comma
- [ ] field
- [ ] for
- [ ] hash
- [ ] heredoc_dedent
- [ ] if_mod
- [ ] ifop
- [ ] kwrest_param
- [ ] lambda
- [ ] magic_comment
- [ ] mlhs_add
- [ ] mlhs_add_post
- [ ] mlhs_add_star
- [ ] mlhs_new
- [ ] mlhs_paren
- [ ] mrhs_add
- [ ] mrhs_add_star
- [ ] mrhs_new
- [ ] mrhs_new_from_args
- [ ] opassign
- [ ] operator_ambiguous
- [ ] param_error
- [ ] parse_error
- [ ] qsymbols_add
- [ ] qsymbols_new
- [ ] qwords_add
- [ ] qwords_new
- [ ] regexp_add
- [ ] regexp_new
- [ ] rescue_mod
- [ ] rest_param
- [ ] stmts_add
- [ ] stmts_new
- [ ] string_add
- [ ] string_dvar
- [ ] symbols_add
- [ ] symbols_new
- [ ] top_const_field
- [ ] top_const_ref
- [ ] unless_mod
- [ ] until_mod
- [ ] var_alias
- [ ] while_mod
- [ ] word_add
- [ ] word_new
- [ ] words_add
- [ ] words_new
- [ ] xstring_add
- [ ] xstring_literal
- [ ] xstring_new

### Complete:

- [x] alias
- [x] aref
- [x] arg_paren
- [x] args_add_block
- [x] array
- [x] assign
- [x] begin
- [x] binary
- [x] block_var
- [x] bodystmt
- [x] brace_block
- [x] break
- [x] call
- [x] case
- [x] class
- [x] command
- [x] const_path_ref
- [x] const_ref
- [x] def
- [x] defined
- [x] do_block
- [x] dot2
- [x] dot3
- [x] else
- [x] elsif
- [x] ensure
- [x] fcall
- [x] if
- [x] massign
- [x] method_add_arg
- [x] method_add_block
- [x] module
- [x] next
- [x] params
- [x] paren
- [x] program
- [x] redo
- [x] regexp_literal
- [x] rescue
- [x] retry
- [x] return
- [x] return0
- [x] sclass
- [x] string_concat
- [x] string_content
- [x] string_embexpr
- [x] string_literal
- [x] super
- [x] symbol
- [x] symbol_literal
- [x] unary
- [x] undef
- [x] unless
- [x] until
- [x] var_field
- [x] var_ref
- [x] vcall
- [x] void_stmt
- [x] when
- [x] while
- [x] yield
- [x] yield0
- [x] zsuper
