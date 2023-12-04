import { PrefixedContext, IntegerEditor, StringEditor, DateEditor, initFormType } from '@serenity-is/corelib';

export interface MovieForm {
    Title: StringEditor;
    Description: StringEditor;
    Storyline: StringEditor;
    Year: IntegerEditor;
    ReleaseDate: DateEditor;
    Runtime: IntegerEditor;
}

export class MovieForm extends PrefixedContext {
    static readonly formKey = 'MovieDB.Movie';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!MovieForm.init)  {
                        MovieForm.init = true;
            
            var w0 = IntegerEditor;
            var w1 = StringEditor;
            var w2 = DateEditor;

            initFormType(MovieForm, [
            'Title', w1,
            'Description', w1,
            'Storyline', w1,
            'Year', w0,
            'ReleaseDate', w2,
            'Runtime', w0,
            ]);
        }
    }
}